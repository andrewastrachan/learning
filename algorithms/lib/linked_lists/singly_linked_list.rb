module SinglyLinkedList
  class Node
    attr_accessor :next, :data

    def initialize(data)
      @data = data
    end

    def append_data_to_last(data)
      ref = self

      ref = ref.next while ref.next

      new_node = Node.new(data)
      ref.next = new_node
      new_node
    end

    def append_node_to_last(node)
      ref = self

      ref = ref.next while ref.next

      ref.next = node
      node
    end

    def distance_from_tail
      ref = self
      count = 1
      count += 1 while ref = ref.next
      count
    end

    def to_a
      self.next ? [self.data] + self.next.to_a : [self.data]
    end
  end
end
