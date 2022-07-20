// let k = 6; // длина строки... (3 пары)...
// let list = Array(6).fill('');

// let cnt = 0 // разница между скобками...
// let ind = 0; // индекс, по которому мы кладем скобку в список...

const k = 6;
const [list, cnt, ind] = [Array(k).fill(''), 0, 0]

function allVariants(cnt, ind, k, list) {
  if (cnt <= k - ind - 2) {
    list[ind] = '(';
    allVariants(cnt + 1, ind + 1, k, list);
  }
  if (cnt > 0) {
    list[ind] = ')';
    allVariants(cnt - 1, ind + 1, k, list);
  }
  if (ind === k && cnt === 0) {
    // return list
    console.log(list)
  }
}
// 0 0 6 [] / 1 1 6 [] / 2 2 6 [] / 3 3 6 []
allVariants(cnt, ind, k, list);