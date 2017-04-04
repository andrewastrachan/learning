module Bst
  class Node
    attr_accessor :left, :right
    attr_reader :data

    def initialize(data)
      @data = data
    end

    def to_a
      if left.nil? && right.nil?
        [self.data]
      elsif left.nil?
        [self.data] + right.to_a
      elsif right.nil?
        left.to_a + [self.data]
      else
        left.to_a + [self.data] + right.to_a
      end
    end
  end
end
