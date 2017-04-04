class Api::TodosController < ApplicationController
  def index
    render json: {todos: Todo.select(:id, :title, :body, :done)}, status: :ok
  end
  def show; end
  def create; end
  def update; end
  def destroy; end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
