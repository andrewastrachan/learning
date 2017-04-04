require 'spec_helper'
require 'linked_lists/loop_detection'

describe '#detect_first_loop_node' do
  before do
    @list = Node.new('a')
    @loop_start = @list.append_data_to_last('b')
                       .append_data_to_last('c')
    @last_node = @loop_start.append_data_to_last('d')
                            .append_data_to_last('e')
                            .append_data_to_last('f')
  end

  it 'returns the first node in a loop' do
    @last_node.next = @loop_start #seal the loop
    expect(loop_detection(@list)).to eq @loop_start
  end

  it 'returns nil if there is no loop' do
    expect(loop_detection(@list)).to eq nil
  end
end
