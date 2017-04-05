require 'spec_helper'
require 'trees/02_list_of_depths'

describe '#list_of_depths' do
  before do
    @root = Bst::Node.new(4)
    @left  = @root.left  = Bst::Node.new(2)
    @right = @root.right = Bst::Node.new(6)
    @left.left = Bst::Node.new(1)
    @left.right = Bst::Node.new(3)
    @right.left = Bst::Node.new(5)
    @right.right = Bst::Node.new(7)
  end
  subject {list_of_depths(@root)}

  it 'returns and array of linked lists' do
    expect(subject.class).to eq Array
    expect(subject.map(&:class).uniq).to eq [SinglyLinkedList::Node]
  end

  it 'returns a linked list for every depth' do
    expect(subject.length).to eq 3
  end

  it 'the linked lists contain the correct nodes' do
    expect(subject.map(&:to_a)).to eq [[@root], [@right,@left], [@right.right,@right.left,@left.right,@left.left]]
  end
end
