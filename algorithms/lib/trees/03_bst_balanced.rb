require 'stacks_and_queues/queue'

# Given a binary tree, design an algorithm to determine if the tree is balanced
# A tree is balanced when such that the heights of either subtree differ by no
# more than one level

#        4
#     2     6
#   1   3
# => true

#         5
#      2     6
#   1    3
           4
# => false

def bst_balanced?(root)
  deadend_depths = {min: nil, max: 0}
  queue  = MyQueue.new({node: root, level: 0}) # first node is always level 0
  while !queue.empty?
    current_node_data = queue.dequeue
    current_node, current_node_level = current_node_data[:node], current_node_data[:level]

    # for each item in the queue, we have a level (depth) and a node
    # if the current node fizzles in either direction, this level represents
    # the minimum deadend level
    if (current_node.left.nil? || current_node.right.nil?) && deadend_depths[:min].nil?
      deadend_depths[:min] = current_node_level
    end

    # if there is a new maximum depth, then set it
    if deadend_depths[:max] < current_node_level
      deadend_depths[:max] = current_node_level
    end

    if deadend_depths[:min] && (deadend_depths[:max] - deadend_depths[:min] > 1)
      return false
    end

    queue.enqueue({node: current_node.left, level: current_node_level + 1}) if current_node.left
    queue.enqueue({node: current_node.right, level: current_node_level + 1}) if current_node.right
  end

  true
end
