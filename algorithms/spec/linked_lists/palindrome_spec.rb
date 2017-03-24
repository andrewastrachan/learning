require 'spec_helper'
require 'linked_lists/palindrome'
require 'linked_lists/singly_linked_list'

describe '#is_palindrome?' do
  context 'even length list' do
    before do
      @list =  Node.new('a')
      @list.append_data_to_last('b').append_data_to_last('b').append_data_to_last('a')
    end

    it 'returns true for palindrome lists' do
      expect(is_palindrome?(@list)).to be_truthy
    end

    it 'returns false for non-palindrome lists' do
      @list.append_data_to_last('b').append_data_to_last('b')
      expect(is_palindrome?(@list)).to be_falsey
    end
  end


  context 'odd length list' do
    before do
      @list =  Node.new('a')
      @list.append_data_to_last('b').append_data_to_last('a')
    end

    it 'returns true for palindrome lists' do
      expect(is_palindrome?(@list)).to be_truthy
    end

    it 'returns false for non-palindrome lists' do
      @list.append_data_to_last('b').append_data_to_last('b')
      expect(is_palindrome?(@list)).to be_falsey
    end
  end
end
