require 'stacks_and_queues/queue'

# #directed_graph_has_route? should return if the root has a path to the destination

def directed_graph_has_route?(root, dest)
  return unless root && dest

  queue = MyQueue.new(root)

  while !queue.empty?
    current_node = queue.dequeue

    unless current_node.visited
      current_node.visit

      return true if current_node == dest
      current_node.children.each do |child_node|
        queue.enqueue(child_node)
      end
    end
  end

  false
end
