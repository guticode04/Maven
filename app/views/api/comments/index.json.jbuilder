@comments.each do |comment|
   json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
   end
end

json.users do
   @comments.each do |comment|
      json.set! comment.user_id do
         json.extract! @user, :nickname
      end
   end
end

#should produce:
# users: {1: { nickname: usernickname }}