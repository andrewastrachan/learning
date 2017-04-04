require 'rails_helper'

RSpec.describe Api::TodosController, type: :controller do
  before {@todo = FactoryGirl.create(:todo)}

  describe 'GET index' do
    subject {get :index}

    it 'returns all todos as json' do
      expect(response.status).to eq 200
      expect(response.body['todos']).to eq({todos: [
        {id: @todo.id, title: @todo.title, body: @todo.body, done: @todo.done}
      ]})
    end
  end
end
