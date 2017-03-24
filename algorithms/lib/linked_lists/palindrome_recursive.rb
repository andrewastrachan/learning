def is_palindrome_recursive?(node, length)
  return node if length == 0 # even
  return node.next if length == 1 #odd

  comparison_node = is_palindrome_recursive?(node.next, length - 2)
  return false unless comparison_node && comparison_node.data == node.data

  comparison_node.next ? comparison_node.next : true
end
