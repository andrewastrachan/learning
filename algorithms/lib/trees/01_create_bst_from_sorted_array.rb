require 'trees/bst_node'

# given a sorted (increasing order array), create a bst with minimal height

def create_bst_from_sorted_array(array)
  return nil if array.empty?
  return Bst::Node.new(array[0]) if array.length == 1
  mid = array.length / 2
  root = Bst::Node.new(array[mid])
  root.left = create_bst_from_sorted_array(array[0...mid])
  root.right = create_bst_from_sorted_array(array[mid + 1..array.length])
  root
end
