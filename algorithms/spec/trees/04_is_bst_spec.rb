require 'spec_helper'
require 'trees/04_is_bst'

describe '#is_bst?' do
  before do
    @root = Bst::Node.new(4)
    left  = @root.left  = Bst::Node.new(2)
    right = @root.right = Bst::Node.new(6)
    left.left = Bst::Node.new(1)
    left.right = Bst::Node.new(3)
    right.left = Bst::Node.new(5)
    @max = right.right = Bst::Node.new(8)
  end
  subject {is_bst?(@root)}

  it 'returns true if the tree is balanced' do
    expect(subject).to be_truthy
  end

  it 'returns false if the tree is not balanced' do
    @max.right = Bst::Node.new(7)
    expect(subject).to be_falsey
  end
end
