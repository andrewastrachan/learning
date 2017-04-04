module MyQueue
  class Queue
    class EmptyQueueError < StandardError; end

    class Node
      attr_accessor :next
      attr_reader :data

      def initialize(data)
        @data = data
      end
    end

    attr_reader :front, :back
    def initialize(data)
      @front = Node.new(data)
      @back  = Node.new(data)
    end

    def empty?
      @front.nil?
    end

    def peek
      if empty?
        raise EmptyQueueError
      else
        @front.data
      end
    end

    def enqueue(data)
      new_back = Node.new(data)
      if @front
        @back.next = new_back
        @back      = new_back
      else
        @front = @back = new_back
      end

      self # for method chaining
    end

    def dequeue
      dequeued = @front
      if dequeued
        @front = @front.next
        # if front is nil, nil out back of queue as well
        @back = @front unless @front
      else
        raise EmptyQueueError
      end

      dequeued.data
    end
  end
end
