# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create!(
  nickname: 'evilMorty', 
  email: 'destroyRick@citadel.com', 
  password: 'basicpassword'
  )


user1 = User.create!(nickname: "Neo", email: "neo@matrix.ai", password: "theone")
user2 = User.create!(nickname: "Morty", email: "cowboymorty@citadel.com", password: "awwgeez")
user3 = User.create!(nickname: "Rick", email: "ricksanchez@tiny.com", password: "tinyrick")
user4 = User.create!(nickname: "Morpheus", email: "morpheus@matrix.ai", password: "findtheone")

artist1 = Artist.create!({name: "J. Cole"})
artist2 = Artist.create!({name: "Queen"})
artist3 = Artist.create!({name: "Zedd"})
artist4 = Artist.create!({name: "Guns N Roses"})
artist5 = Artist.create!({name: "The Beatles"})

track1 = artist1.tracks.create!({title: "Change", lyrics: File.read(Rails.root + 'db/lyrics/change.txt')})
track2 = artist2.tracks.create!({title: "Bohemian Rhapsody", lyrics: File.read(Rails.root + 'db/lyrics/bohemian_rhapsody.txt')})
track3 = artist3.tracks.create!({title: "Straight Into The Fire", lyrics: File.read(Rails.root + 'db/lyrics/into_the_fire.txt')})
track4 = artist3.tracks.create!({title: "Stay", lyrics: File.read(Rails.root + 'db/lyrics/stay.txt')})
track5 = artist2.tracks.create!({title: "Another One Bites The Dust", lyrics: File.read(Rails.root + 'db/lyrics/the_dust.txt')})
track6 = artist1.tracks.create!({title: "Crooked Smile", lyrics: File.read(Rails.root + 'db/lyrics/crooked_smile.txt')})
track7 = artist4.tracks.create!({title: "Sweet Child O Mine", lyrics: File.read(Rails.root + 'db/lyrics/sweet_child.txt')})
track8 = artist5.tracks.create!({title: "Paperback Writer", lyrics: File.read(Rails.root + 'db/lyrics/paperback_writer.txt')})
track9 = artist5.tracks.create!({title: "Come Together", lyrics: File.read(Rails.root + 'db/lyrics/come_together.txt')})
track10 = artist5.tracks.create!({title: "Hey Jude", lyrics: File.read(Rails.root + 'db/lyrics/hey_jude.txt')})