# 3 - 1 - 5 - 9
#               } 7 - 2 - 1
#         4 - 6
#
# 7 - 5 = 2 ( diff in list length )

# O(A + B) time and O(1) space
def intersection(node_1, node_2)
  node_1_len = node_1.distance_from_tail
  node_2_len = node_2.distance_from_tail
  node_len_diff = node_1_len - node_2_len

  # these are the runners
  r1 = node_1
  r2 = node_2

  # We flip the references if the second node
  # length is longer than the first node length
  if node_len_diff < 0
    r1 = node_2
    r2 = node_1
  end

  node_len_diff.abs.times {|_| r1 = r1.next}

  while r1
    return r1 if r1 == r2
    r1 = r1.next
    r2 = r2.next
  end

  nil
end
