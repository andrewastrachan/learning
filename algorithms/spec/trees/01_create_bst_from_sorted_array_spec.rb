require 'spec_helper'
require 'trees/01_create_bst_from_sorted_array'

describe '#create_bst_from_sorted_array' do
  subject {create_bst_from_sorted_array([1,2,3,4,5,6,7])}

  it 'returns a bst node' do
    expect(subject.class).to eq(Bst::Node)
  end

  it 'returns a balanced tree' do
    expect(subject.to_a).to eq([1,2,3,4,5,6,7])
  end
end
