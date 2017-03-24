require 'spec_helper'
require 'linked_lists/intersection'

describe '#intersection' do
  before do
    @intersection = Node.new(7)
    @intersection.append_data_to_last('2').append_data_to_last('1')

    @first  = Node.new(3)
    @first.append_data_to_last('1')
          .append_data_to_last('5')
          .append_data_to_last('9')
          .append_node_to_last(@intersection)

    @second = Node.new(4)
    @second.append_data_to_last('4')
           .append_data_to_last('6')
           .append_node_to_last(@intersection)

    #
    #  3 - 1 - 5 - 9
    #                } 7 - 2 - 1
    #          4 - 6
    #
  end

  it 'should find the intersection' do
    expect(intersection(@first, @second)).to eq @intersection
  end
end
