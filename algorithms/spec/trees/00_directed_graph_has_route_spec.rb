require 'trees/directed_graph_has_route'
require 'trees/directed_graph_node'
require 'spec_helper'

describe '#directed_graph_has_route?' do
  before do
    @root = DirectedGraph::Node.new('root')
    @root.append_child_data('b').append_child_data('c')
    @tail = @root.append_child_data('d').append_child_data('e')
    @tail.append_child_data('f')
  end

  it 'returns true if there is a route between the nodes' do
    dest = @tail.append_child_data('dest')
    expect(directed_graph_has_route?(@root, dest)).to be_truthy
  end

  it 'returns false if there is no route' do
    dest = DirectedGraph::Node.new('dest')
    expect(directed_graph_has_route?(@root, dest)).to be_falsey
  end

  it 'returns false if there is no root node' do
    dest = @tail.append_child_data('dest')
    expect(directed_graph_has_route?(nil, dest)).to be_falsey
  end

  it 'returns false if there is no destination node' do
    expect(directed_graph_has_route?(@garoot, nil)).to be_falsey
  end
end
