class Queue
  class Node
    attr_accessor :next

    def initialize(data)
      @data = data
    end
  end

  def initialize(data)
    @front = Node.new(data)
    @back  = Node.new(data)
  end

  def enqueue(data)
    enqueued = Node.new(data)
    if !@back
      @front = enqueued
    else
      enqueued.next = @back
    end
    @back = enqueued
  end

  def dequeue
    if !@back
      nil
    else
      dequeued = @front


    end

    @front   = front.next if @front
    dequeued
  end

  def peek
  end
end

# list = A <- B <- C <- D
# front = D
# back  = A
#

# front = nil
# back = nil
# enqueue 1
# back = 1
# 1 ->

