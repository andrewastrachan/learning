require 'linked_lists/singly_linked_list'

def list_of_depths(bst_node, depth = 0, linked_lists = [])
  return unless bst_node
  list_node = SinglyLinkedList::Node.new(bst_node.data)
  linked_lists[depth] ? linked_lists[depth].append_node_to_last(list_node) : linked_lists[depth] = list_node
  list_of_depths(bst_node.left, depth + 1, linked_lists)
  list_of_depths(bst_node.right, depth + 1, linked_lists)

  linked_lists
end

#      4
#   2      6
# 1   3  5   7

# => [4, 2->6 , 1->3->5->7]
