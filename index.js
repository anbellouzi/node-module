
const merge_sort = (items) => {
    if (items.length > 1) {
    
        let mid = (items.length / 2)
        let right = items.slice(mid, items.length)
        let left = items.slice(0, mid)
        
        console.log(items)
        console.log(left)
        console.log(right)
        
        merge_sort(right)
        merge_sort(left)
        
        l = 0
        r = 0
        i = 0
 
        left_size = left.length
        right_size = right.length
        while ((l < left_size) && (r < right_size)) {
            if (left[l] < right[r]) {
              items[i] = left[l]
              l = l + 1
            } else {
                items[i] = right[r]
                r = r + 1
            }
            i += 1
        }
        while (l < left_size) {
            items[i] = left[l]
            l = l + 1
            i = i + 1
        }
        while (r < right_size) {
            items[i]=right[r]
            r = r + 1
            i = i + 1
        }
    }
    return items
}

module.exports = {
  merge_sort
}
