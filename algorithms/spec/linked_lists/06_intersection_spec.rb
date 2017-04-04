require 'spec_helper'
require 'linked_lists/06_intersection'

describe '#intersection' do
  before do
    @intersection = SinglyLinkedList::Node.new(7)
    @intersection.append_data_to_last('2').append_data_to_last('1')

    @first  = SinglyLinkedList::Node.new(3)
    @first.append_data_to_last('1')
          .append_data_to_last('5')
          .append_data_to_last('9')
          .append_node_to_last(@intersection)

    @second = SinglyLinkedList::Node.new(4)
    @second.append_data_to_last('4')
           .append_data_to_last('6')
           .append_node_to_last(@intersection)
  end

  it 'should find the intersection' do
    expect(intersection(@first, @second)).to eq @intersection
  end
end
