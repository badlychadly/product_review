require 'rails_helper'

RSpec.feature "Users", type: :feature do
  describe "new user signup" do
    it "creates a new user" do 
      visit signup_path 
      fill_in "user[username]", with: "Mark"
      fill_in "user[email]", with: "mark@gmail.com"
      fill_in "user[password]", with: "markmark"
      fill_in "user[password_confirmation]", with: "markmark"
      click_button "Sign up"
      expect(User.find_by(username: "Mark").username).to eq "Mark"
    end
  end

end
