require 'ap'

# A - B - C - D
#         |    \
#         G    E
#         \   /
#           F
#
# Should return node at C

# O(N) time and O(N) space
def loop_detection(node)
  seen = {}
  while node = node.next
    return node if seen[node.object_id]
    seen[node.object_id] = true
  end
  nil
end

# Alternative (Better) Answer:
#
# - Our slow runner enters the loop after k steps
# - This means that our fast runner is 2k steps ahead of our slow runner
# - This also means that we're k steps into the looped portion
# - This could also be written as LOOP_SIZE - k steps behind the slow runner
#    - For instance if the loops size is 4 and we've advanced k steps, then


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


# A - B - C
#  \_____/
#
# index 0 1 2
# r1loc A B C A
# r2loc A C B A

# A - B - C - D - E
#         |_______|
#
# index 0 1 2 3 4 5
# r1loc A B C D
# r2loc A C E D
