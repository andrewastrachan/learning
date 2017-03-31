class Stack
  class Node
    attr_accessor :next

    def initialize(data)
      @data = data
    end
  end

  def initialize(data)
    @top = Node.new(data)
  end

  def push(data)
    new_top = Node.new(data)
    new_top.next = @top
    @top = new_top
  end

  def pop
    popped = @top
    @top = @top.next if @top
    popped
  end

  def peek
    @top
  end
end
