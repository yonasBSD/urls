use super::viewer::Viewer;
use crate::db::models::{Invite, NewUserInput, UpdateUserInput, User};
use crate::{Config, Context};
use juniper::{graphql_object, FieldResult, GraphQLObject};

pub struct Mutation;

/// A value mutations can return, if there
/// is no other interesting object that could
/// be returned.
#[derive(Debug, Copy, Clone, GraphQLObject)]
struct Void {
    /// Indicates whether the operation was
    /// successful.
    ok: bool,
}

impl Void {
    fn ok() -> FieldResult<Self> {
        Ok(Self { ok: true })
    }
}

#[graphql_object(context = Context)]
impl Mutation {
    /// Register a new user by claiming the provided invitation code `token`.
    async fn register_user(ctx: &Context, input: NewUserInput, token: String) -> FieldResult<User> {
        let invite = Invite::find_by_token(ctx, &token).await?;
        let user = User::create_with_invite(ctx, input, invite).await?;
        Ok(user)
    }

    /// Update details for the currently logged in user.
    async fn update_user(ctx: &Context, input: UpdateUserInput) -> FieldResult<Viewer> {
        let mut user = ctx.user().await?;
        user.update(ctx, input).await?;
        Ok(Viewer)
    }

    /// Request a login code for the user associated with the given `email`. Note
    /// this this might fail because of rate limiting.
    async fn request_login(ctx: &Context, email: String) -> FieldResult<Void> {
        let user = User::find_by_email(ctx, &email).await?;
        user.request_login(ctx).await?;
        Void::ok()
    }

    /// Login using the given `email` and a login code (or token) previously obtained
    /// from `request_login`.
    async fn login(ctx: &Context, email: String, token: String) -> FieldResult<String> {
        let user = User::find_by_email(ctx, &email).await?;
        let session = user.login(ctx, &token).await?;
        Ok(session.base64(Config::env().session_key())?)
    }

    /// Create a new invite, issued by the currently logged in user.
    async fn issue_invite(ctx: &Context) -> FieldResult<Invite> {
        let user = ctx.user().await?;
        Ok(Invite::create(ctx, &user).await?)
    }
}
