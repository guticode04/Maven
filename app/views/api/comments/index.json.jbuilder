def find_author_name(comment) 
   User.find_by(id: comment.user_id).nickname
end

@comments.each do |comment|
   json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
      json.set!('author_name', find_author_name(comment))
   end
end

