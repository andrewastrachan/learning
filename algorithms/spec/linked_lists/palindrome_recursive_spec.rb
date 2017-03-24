require 'spec_helper'
require 'linked_lists/palindrome_recursive'
require 'linked_lists/singly_linked_list'

# Assumption here being that we've already implemented
# a linked-list length fn that counts in O(N) time:
# This is trivial so it's been omitted here.
describe '#is_palindrome_recursive?' do
  context 'even length list' do
    before do
      @list =  Node.new('a')
      @list.append_data_to_last('b').append_data_to_last('b').append_data_to_last('a')
    end

    it 'returns true for palindrome lists' do
      expect(is_palindrome_recursive?(@list, 4)).to be_truthy
    end

    it 'returns false for non-palindrome lists' do
      @list.append_data_to_last('b').append_data_to_last('b')
      expect(is_palindrome_recursive?(@list, 6)).to be_falsey
    end
  end


  context 'odd length list' do
    before do
      @list =  Node.new('a')
      @list.append_data_to_last('b').append_data_to_last('a')
    end

    it 'returns true for palindrome lists' do
      expect(is_palindrome_recursive?(@list, 3)).to be_truthy
    end

    it 'returns false for non-palindrome lists' do
      @list.append_data_to_last('b').append_data_to_last('b')
      expect(is_palindrome_recursive?(@list, 5)).to be_falsey
    end
  end
end

