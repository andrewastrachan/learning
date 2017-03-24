# 3 - 1 - 5 - 9
#               } 7 - 2 - 1
#         4 - 6
#
# 7 - 5 = 2 ( diff in list length )

#  3 - 1 - 5 - 9
#                } 7 - 2 - 1 - 8
#          4 - 6
#
# 8 - 6 = 2 ( diff in list length )

# 3 - 4 - 5 - 6
#               } 7 - 1 - 6
#     3 - 4 - 5
#
# 7 - 6 = 1 ( diff in list length )


# 4 - 5 - 6
#           } 7 - 1 - 6 - 8
# 3 - 4 - 5
#
# 6 - 6 = 0 ( diff in list length )

#     4 - 5 - 6
#               } 7 - 1 - 6 - 8
# 3 - 4 - 5 - 7
#
# 7 - 8 = -1 ( diff in list length )


def intersection(node_1, node_2)
  node_1_len = find_list_length(node_1)
  node_2_len = find_list_length(node_2)
  node_len_diff = node_1_len - node_2_len
  p node_1_len
  p node_2_len

  # these are the runners
  r1 = node_1
  r2 = node_2
  if node_len_diff < 0
    r1 = node_2
    r2 = node_1
  end

  p node_len_diff
  node_len_diff.abs.times {|_| r1 = r1.next}
  p r1.data
  p r2.data

  while r1
    return r1 if r1 == r2
    r1 = r1.next
    r2 = r2.next
  end

  nil
end

def find_list_length(node)
  count = 0
  while node
    count += 1
    node = node.next
  end
  count
end
