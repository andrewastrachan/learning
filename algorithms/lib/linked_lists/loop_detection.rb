# A - B - C - D
#         |    \
#         G    E
#         \   /
#           F
#
# Should return node at C

# O(N) time and O(N) space
# def loop_detection(node)
#   seen = {}
#   while node = node.next
#     return node if seen[node.object_id]
#     seen[node.object_id] = true
#   end
#   nil
# end

# O(N) time ? and O(1) Space
def loop_detection(node)
  r1, r2 = node, node

  while r2 != nil && r2.next != nil
    r1 = r1.next
    2.times { r2 = r2.next }
    break if r1 == r2
  end

  return nil if r2.nil? # protect for no loop

  r1 = node
  while r1 != r2
    r1 = r1.next
    r2 = r2.next
  end

  r2
end
