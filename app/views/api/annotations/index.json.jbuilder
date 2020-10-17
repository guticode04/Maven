def find_annotator(annotation)
   User.find_by(id: annotation.user_id).nickname
end

@annotations.each do |annotation|
   json.set! annotation.id do
      json.partial! "api/annotations/annotation", annotation: annotation
      json.set!('annotator', find_annotator(annotation))
   end
end