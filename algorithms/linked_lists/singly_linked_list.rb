class Node
  attr_accessor :next, :data

  def initialize(data)
    @data = data
  end

  def append_to_last(data)
    current_node = self

    while current_node.next
      current_node = current_node.next
    end

    new_node = Node.new(data)
    current_node.next = new_node
    self
  end
end
