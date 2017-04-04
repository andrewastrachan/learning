FactoryGirl.define do
  factory :todo do
    sequence(:title) {|n| "title-#{n}"}
    sequence(:body) {|n| "body-#{n}"}
    done false
  end
end
