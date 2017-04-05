require 'spec_helper'
require 'trees/03_bst_balanced'

describe '#bst_balanced?' do
  before do
    @root = Bst::Node.new(4)
    left  = @root.left  = Bst::Node.new(2)
    right = @root.right = Bst::Node.new(6)
    left.left = Bst::Node.new(1)
    left.right = Bst::Node.new(3)
    right.left = Bst::Node.new(5)
    right.right = Bst::Node.new(7)
  end
  subject {bst_balanced?(@root)}

  it 'returns true if the tree is balanced' do
    expect(subject).to be_truthy
  end

  it 'returns false if the tree is not balanced' do
    @root.right = nil
    expect(subject).to be_falsey
  end
end
