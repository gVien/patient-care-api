class Provider < ActiveRecord::Base
  before_validation :capitalize_all_incoming_provides
  validates :name, :location, presence: true
  validate :provides_must_be_in_the_available_list

  private
    # custom validation to ensure the correct "provides" are added to database
    def provides_must_be_in_the_available_list
      provides_option = ["Diabetes Care",
                          "Dialysis",
                          "Medication Management",
                          "Outpatient Therapy",
                          "Oxygen",
                          "Physical Therapy",
                          "Speech Therapy",
                          "Wound Care"]

      invalid_provides_option = provides - provides_option  # gives an array of options not in `provides_options` array

      if invalid_provides_option .length > 0
        invalid_provides_option .each do |invalid_provide|
          errors.add(:invalid_provides, invalid_provide + "provide is not part of the provides option.")
        end
      end
    end

    def capitalize_all_incoming_provides
      provides.each_with_index { |provide, i| provides[i] = provides[i].titleize }
    end
end
