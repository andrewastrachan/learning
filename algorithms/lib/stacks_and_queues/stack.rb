class Stack
  class EmptyStackError < StandardError; end
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
    self
  end

  def pop
    raise EmptyStackError if empty?
    popped = @top
    @top = @top.next if @top
    popped.data
  end

  def empty?
    !@top
  end

  def peek
    raise EmptyStackError if empty?
    @top.data
  end
end
