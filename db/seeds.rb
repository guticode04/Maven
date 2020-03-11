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


track1 = Track.create({name: "J. Cole", title: "Change", lyrics: File.read(Rails.root + 'db/lyrics/change.txt')})
track2 = Track.create({name: "Queen", title: "Bohemian Rhapsody", lyrics: File.read('db/lyrics/bohemian_rhapsody')})
track3 = Track.create({name: "Zedd", title: "Straight Into The Fire", lyrics: File.read('db/lyrics/into_the_fire')})
track4 = Track.create({name: "Zedd", title: "Stay", lyrics: File.read('db/lyrics/stay')})
track5 = Track.create({name: "Queen", title: "Another One Bites The Dust", lyrics: File.read('db/lyrics/the_dust')})
track6 = Track.create({name: "J. Cole", title: "Crooked Smile", lyrics: File.read('db/lyrics/crooked_smile')})
track7 = Track.create({name: "Gun N Roses", title: "Sweet Child O Mine", lyrics: File.read('db/lyrics/sweet_child')})
track8 = Track.create({name: "The Beatles", title: "Paperback Writer", lyrics: File.read('db/lyrics/paperback_writer')})
track9 = Track.create({name: "The Beatles", title: "Come Together", lyrics: File.read('db/lyrics/come_together')})
track10 = Track.create({name: "The Beatles", title: "Hey Jude", lyrics: File.read('db/lyrics/hey_jude')})