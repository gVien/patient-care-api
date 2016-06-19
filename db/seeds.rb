# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Provider.create(name: "Stephen's Care Home",
                location: "San Francisco, CA",
                phone_number: "415-715-9717",
                provides: ["Dialysis", "Physical Therapy"
                  ])
Provider.create(name: "Justin's Care Home",
                location: "Los Altos, CA",
                provides: ["Diabetes Care", "Medication Management", "Outpatient Therapy"])

provides_option = ["Diabetes Care","Dialysis","Medication Management","Outpatient Therapy","Oxygen","Physical Therapy","Speech Therapy","Wound Care"]

10.times do |n|
  name = Faker::Company.name + "Care" + ["Center", "Home"].sample
  location = ["San Francisco, CA", "Los Angelos, CA", "Oakland, CA", "San Jose, CA"].sample
  phone_number = Faker::PhoneNumber.phone_number

  provide_sample = (0..provides_option.length).to_a.sample
  random_provides = provides_option[0..provide_sample]

  if [true, false].sample  # randomly select true or false
    Provider.create(name: name,
                    location: location,
                    phone_number: phone_number,
                    provides: random_provides)

  else  # without phone number
        Provider.create(name: name,
                    location: location,
                    provides: random_provides)
  end
end