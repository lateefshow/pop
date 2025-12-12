=======================
// FILE: 10\checknumber.go
=======================
package student

func CheckNumber(str string) bool {
	for _, c := range str {
		if c >= '0' && c <= '9' {
			return true
		}
	}
	return false
}

=======================
// FILE: 10\countalpha.go
=======================
package student

func CountAlpha(s string) int {
	count := 0
	for _, c := range s {
		if c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' {
			count++
		}
	}
	return count
}

=======================
// FILE: 10\countcharacter.go
=======================
package student

func CountChar(str string, c rune) int {
	var count int
	for _, v := range str {
		if rune(v) == c {
			count++
		}
	}
	return count
}

=======================
// FILE: 10\go.mod
=======================
module student

go 1.18

=======================
// FILE: 10\printif.go
=======================
package student

func PrintIf(arg string) string {
	if len(arg) != 0 && len(arg) < 3 {
		return "Invalid Input\n"
	}
	return "G\n"
}

=======================
// FILE: 10\printifnot.go
=======================
package student

func PrintIfNot(arg string) string {
	if len(arg) >= 3 {
		return "Invalid Input\n"
	} else {
		return "G\n"
	}
}

=======================
// FILE: 10\rectperimeter.go
=======================
package student

func RectPerimeter(w, h int) int {
	if (w < 0) || (h < 0) {
		return -1
	}

	return 2 * (w + h)
}

=======================
// FILE: 10\retainfirsthalf.go
=======================
package solutions

import "strings"

func RetainFirstHalf(str string) string {
	if len(str) == 0 {
		return ""
	} else if len(str) == 1 {
		return (str)
	} else {
		var res strings.Builder
		i := 0
		for i = 0; i < int(len(str)/2); i++ {
			res.WriteRune(rune(str[i]))
		}
		return res.String()
	}
}

=======================
// FILE: 20\countrepeats.go
=======================
package solutions

import (
	"strconv"
)

func CountRepeats(s string) string {
	if s == "" {
		return s
	}

	var result string
	var counter = 1

	for i := 0; i < len(s); i++ {
		if i+1 < len(s) && string(s[i]) == string(s[i+1]) {
			counter++
		} else {
			result += string(s[i])
			if counter > 1 {
				result += strconv.Itoa(counter)
			}
			counter = 1
		}
	}
	return result
}

=======================
// FILE: 20\digitlen.go
=======================
package solutions

func DigitLen(n, base int) int {

	if base < 2 || base > 36 {
		return -1
	}

	if n < 0 {
		n = -n
	}

	count := 0
	for n > 0 {
		n /= base
		count++
	}
	return count
}

=======================
// FILE: 20\firstword.go
=======================
package solutions

import "strings"

func FirstWord(s string) string {
	words := strings.Fields(s)
	res := "\n"
	if len(words) > 0 {
		res = words[0] + res
	}
	return res
}

=======================
// FILE: 20\fishandchips.go
=======================
package solutions

func FishAndChips(n int) string {
	if n < 0 {
		return "error: number is negative"
	}

	if (n%2 == 0) && (n%3 == 0) {
		return "fish and chips"
	}
	if n%2 == 0 {
		return "fish"
	}
	if n%3 == 0 {
		return "chips"
	}
	return "error: non divisible"
}

=======================
// FILE: 20\gcd.go
=======================
package solutions

func Gcd(a, b uint) uint {
	for a != b {
		if a > b {
			a -= b
		} else {
			b -= a
		}
	}
	return a
}

=======================
// FILE: 20\hashcode.go
=======================
package solutions

func HashCode(dec string) string {
	size := len(dec)
	hashed := ""
	for _, char := range dec {
		hash := (int(char) + size) % 127
		if hash < 32 || hash > 126 {
			hash += 33
		}
		hashed += string(hash)
	}
	return hashed
}

=======================
// FILE: 20\lastword.go
=======================
package solutions

import (
	"strings"
)

func LastWord(s string) string {
	words := strings.Fields(s)
	if len(words) > 0 {
		return words[len(words)-1] + "\n"
	}
	return "\n"
}

=======================
// FILE: 20\longestword.go
=======================
package solutions

import (
	"strings"
	"unicode"
)

func isValidWord(word string) bool {
	if word == "" {
		return false
	}

	last := rune(word[len(word)-1])
	if strings.ContainsRune(".,!?;:", last) {
		word = word[:len(word)-1]
		if word == "" {
			return false
		}
	}

	firstRune := []rune(word)[0]
	if !unicode.IsLetter(firstRune) {
		return false
	}

	for _, r := range word {
		if !unicode.IsLetter(r) {
			return false
		}
	}

	return true
}

func LongestWord(s string) string {
	words := strings.Fields(s)
	longest := ""

	for _, w := range words {
		if isValidWord(w) {
			if len([]rune(w)) > len([]rune(longest)) {
				longest = w
			}
		}
	}

	return longest
}

=======================
// FILE: 20\repeatalpha.go
=======================
package solutions

import "unicode"

func RepeatAlpha(s string) string {
	res := ""
	for _, r := range s {
		if unicode.IsLetter(r) {
			rep := unicode.ToLower(r) - 'a' + 1
			for i := 0; i < int(rep); i++ {
				res += string(r)
			}
		} else {
			res += string(r)
		}
	}
	return res
}

=======================
// FILE: 20\wordanatomy.go
=======================
package solutions

func WordAnatomy(initialWord string, prefixArray []string, suffixArray []string) string {
	matchedPrefix := ""
	matchedSuffix := ""

	for _, prefix := range prefixArray {
		if hasPrefix(initialWord, prefix) {
			matchedPrefix = prefix
			break
		}
	}
	for _, suffix := range suffixArray {
		if hasSuffix(initialWord, suffix) {
			matchedSuffix = suffix
			break
		}
	}

	return "prefix: " + matchedPrefix + "," + " suffix: " + matchedSuffix
}

func hasPrefix(initialWord, prefix string) bool {
	if len(prefix) > len(initialWord) {
		return false
	}

	return initialWord[:len(prefix)] == prefix
}

func hasSuffix(initialWord, suffix string) bool {
	if len(suffix) > len(initialWord) {
		return false
	}

	return initialWord[len(initialWord)-len(suffix):] == suffix
}

=======================
// FILE: 35\cameltosnakecase.go
=======================
package solutions

func containOnlyAlphabet(str string) bool {
	for _, c := range str {
		if (c < 'a' || c > 'z') && (c < 'A' || c > 'Z') {
			return false
		}
	}
	return true
}

func isUpper(s rune) bool {
	return s >= 'A' && s <= 'Z'
}

func CamelToSnakeCase(s string) string {
	result := ""
	if len(s) == 0 || !containOnlyAlphabet(s) {
		return s
	}
	for i := 0; i < len(s); i++ {
		if i != 0 && isUpper(rune(s[i])) && i+1 < len(s) && !isUpper(rune(s[i+1])) {
			result += "_"
			result += string(s[i])
		} else if !isUpper(rune(s[i])) || (i == 0 && isUpper(rune(s[i]))) {
			result += string(s[i])
		} else {
			return s
		}
	}
	return result
}

=======================
// FILE: 35\findprevprime.go
=======================
package solutions

import "github.com/01-edu/go-tests/lib/is"

func FindPrevPrime(nb int) int {
	if nb < 2 {
		return 0
	}
	if is.Prime(nb) {
		return nb
	}
	return FindPrevPrime(nb - 1)
}

=======================
// FILE: 35\fromto.go
=======================
package solutions

import "strconv"

func FromTo(from, to int) string {
	result := ""

	if from > 99 || from < 0 || to > 99 || to < 0 {
		return "Invalid\n"
	} else if from == to && from < 10 {
		return "0" + strconv.Itoa(from) + "\n"
	}
	if from > to {
		for i := from; i >= to; i-- {
			if i < 10 {
				result += "0"
			}
			result += strconv.Itoa(i)
			if i-1 >= to {
				result += ", "
			}
		}
		return result + "\n"
	}
	for i := from; i <= to; i++ {
		if i < 10 {
			result += "0"
		}
		result += strconv.Itoa(i)
		if i+1 <= to {
			result += ", "
		}
	}
	return result + "\n"
}

=======================
// FILE: 35\go.mod
=======================
module student

go 1.18

=======================
// FILE: 35\iscapitalized.go
=======================
package solutions

func IsCapitalized(s string) bool {
	if len(s) == 0 {
		return false
	}

	for i := 0; i < len(s); i++ {
		if s[i] >= 'a' && s[i] <= 'z' && i != 0 && s[i-1] == ' ' {
			return false
		}
	}
	return !(s[0] >= 'a' && s[0] <= 'z')
}

=======================
// FILE: 35\itoa.go
=======================
package solutions

import "strconv"

var Itoa = strconv.Itoa

=======================
// FILE: 35\passwordentropy.go
=======================
package solutions

import (
	"math"
	"unicode"
)

func Entropy(password string) float64 {
	const (
		lowerBit = 1 << iota
		upperBit
		digitBit
		specialBit
	)

	used := 0
	poolSize := 0.0

	for _, r := range password {
		if used&lowerBit == 0 && unicode.IsLower(r) {
			used |= lowerBit
			poolSize += 26
		} else if used&upperBit == 0 && unicode.IsUpper(r) {
			used |= upperBit
			poolSize += 26
		} else if used&digitBit == 0 && unicode.IsDigit(r) {
			used |= digitBit
			poolSize += 10
		} else if used&specialBit == 0 && !unicode.IsLetter(r) && !unicode.IsDigit(r) {
			used |= specialBit
			poolSize += 32
		}

		if used == lowerBit|upperBit|digitBit|specialBit {
			break
		}
	}

	if poolSize == 0 {
		return 0
	}

	return float64(len(password)) * math.Log2(poolSize)
}

=======================
// FILE: 35\printmemory.go
=======================
package solutions

import (
	"fmt"
	"strings"
)

func PrintMemory(a [10]byte) {
	str := ""
	for i, nbr := range a {
		fmt.Printf("%.2x", nbr)

		if ((i+1)%4 == 0 && i != 0) || i == len(a)-1 {
			fmt.Println()
		} else {
			fmt.Print(" ")
		}

		if nbr >= 33 && nbr <= 126 {
			str += string(rune(nbr))
		} else {
			str += "."
		}
	}
	fmt.Println(str + strings.Repeat(".", 10-len(a)))
}

=======================
// FILE: 35\printrevcomb\main.go
=======================
package main

import "fmt"

func main() {
	for a := 9; a >= 2; a-- {
		for b := a - 1; b >= 1; b-- {
			for c := b - 1; c >= 0; c-- {
				fmt.Printf("%d%d%d", a, b, c)
				if a+b+c != 3 {
					fmt.Print(", ")
				}
			}
		}
	}
	fmt.Println()
}

=======================
// FILE: 35\thirdtimeisacharm.go
=======================
package solutions

import "strings"

func ThirdTimeIsACharm(arg string) string {
	if arg == "" || len(arg) < 3 {
		return "\n"
	}
	var str strings.Builder
	for i := 0; i < len(arg); i++ {
		if i == 0 {
			continue
		}
		j := i + 1
		if j%3 == 0 {
			str.WriteRune(rune(arg[i]))
		}
	}
	str.WriteRune(rune('\n'))
	return (str.String())
}

=======================
// FILE: 35\weareunique.go
=======================
package solutions

import "strings"

func WeAreUnique(str1 string, str2 string) int {
	var used [127]int
	if str1 == "" && str2 == "" {
		return -1
	}
	var argv []string = []string{str1, str2}
	k := 0
	i := 0
	for i < 2 {
		j := 0
		for j < len(argv[i]) {
			if used[argv[i][j]] == 0 && !strings.Contains(argv[1-i], string(argv[i][j])) {
				used[argv[i][j]] = 1
				k++
			}
			j++
		}
		i++
	}
	return k
}

=======================
// FILE: 35\zipstring.go
=======================
package solutions

import "strconv"

func countDuplication(s string, i int) int {
	var count int = 0
	for _, v := range s[i:] {
		if v == rune(s[i]) {
			count++
		} else {
			break
		}
	}
	return count
}

func ZipString(s string) string {
	var result string
	i := 0
	for i < len(s) {
		counter := countDuplication(s, i)
		result = result + strconv.Itoa(counter) + string(s[i])
		i += int(counter)
	}
	return result
}

=======================
// FILE: 50\addprimesum\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/01-edu/go-tests/lib/is"
)

func main() {
	if len(os.Args) != 2 {
		fmt.Println("0")
	} else {
		argument, _ := strconv.Atoi(os.Args[1])

		if argument < 0 {
			fmt.Println("0")
		} else {
			result := 0
			for ; argument >= 0; argument-- {
				if is.Prime(argument) {
					result += argument
				}
			}
			fmt.Println(result)
		}
	}
}

=======================
// FILE: 50\canjump.go
=======================
package solutions

func CanJump(steps []uint) bool {
	if len(steps) == 0 {
		return false
	}

	maxReach := 0
	for i := 0; i < len(steps); i++ {
		if i > maxReach {
			return false
		}
		maxReach = max(maxReach, i+int(steps[i]))
		if maxReach == len(steps)-1 || len(steps) == 1 {
			return true
		}
	}
	return false
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

=======================
// FILE: 50\chunk.go
=======================
package solutions

import "fmt"

func Chunk(a []int, ch int) {
	var slice []int
	if ch <= 0 {
		fmt.Println()
		return
	}
	result := make([][]int, 0, len(a)/ch+1)
	for len(a) >= ch {
		slice, a = a[:ch], a[ch:]
		result = append(result, slice)
	}
	if len(a) > 0 {
		result = append(result, a[:])
	}
	fmt.Println(result)
}

=======================
// FILE: 50\concatalternate.go
=======================
package solutions

func ConcatAlternate(slice1, slice2 []int) []int {
	var result []int

	if len(slice1) < len(slice2) {
		slice1, slice2 = slice2, slice1
	}
	for i, v := range slice1 {
		result = append(result, v)
		if i < len(slice2) {
			result = append(result, slice2[i])
		}
	}
	return result
}

=======================
// FILE: 50\concatslice.go
=======================
package solutions

func ConcatSlice(slice1, slice2 []int) []int {
	var result []int
	for _, v := range slice1 {
		result = append(result, v)
	}
	for _, v := range slice2 {
		result = append(result, v)
	}
	return result
}

=======================
// FILE: 50\fprime\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strconv"
)

func fprime(value int) {
	if value == 1 {
		return
	}
	divisionIterator := 2
	for value > 1 {
		if value%divisionIterator == 0 {
			fmt.Print(divisionIterator)
			value = value / divisionIterator

			if value > 1 {
				fmt.Print("*")
			}
			divisionIterator--
		}
		divisionIterator++
	}
	fmt.Println()
}

func main() {
	if len(os.Args) == 2 {
		if i, err := strconv.Atoi(os.Args[1]); err == nil {
			fprime(i)
		}
	}
}

=======================
// FILE: 50\go.mod
=======================
module student

go 1.18

=======================
// FILE: 50\hiddenp\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	var i int
	if len(os.Args) != 3 {
		return
	}
	for _, r := range os.Args[1] {
		j := strings.Index(os.Args[2][i:], string(r))
		if j == -1 {
			fmt.Println("0")
			return
		}
		i += j + 1
	}
	fmt.Println("1")
}

=======================
// FILE: 50\inter\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strings"
)

func result(s1 string, s2 string) string {
	var rest []rune
	for _, a := range s1 {
		for _, b := range s2 {
			if a == b && !strings.ContainsRune(string(rest), a) {
				rest = append(rest, a)
			}
		}
	}
	return string(rest)
}

func main() {
	if len(os.Args) == 3 {
		fmt.Println(result(os.Args[1], os.Args[2]))
	}
}

=======================
// FILE: 50\reversestrcap\main.go
=======================
package main

import (
	"fmt"
	"os"
	"unicode"
)

func main() {
	for _, arg := range os.Args[1:] {
		arg := []rune(arg)
		for j, r := range arg {
			if j+1 == len(arg) || arg[j+1] == ' ' {
				arg[j] = unicode.ToUpper(r)
			} else {
				arg[j] = unicode.ToLower(r)
			}
		}
		fmt.Println(string(arg))
	}
}

=======================
// FILE: 50\saveandmiss.go
=======================
package solutions

func SaveAndMiss(arg string, num int) string {
	if num <= 0 || num > len(arg) {
		return string(arg)
	}
	_str := ""
	for i := 0; i < len(arg); i++ {
		if i != 0 && i%num == 0 {
			i += num
			if i > len(arg)-1 {
				break
			}
		}
		if i != len(arg) {
			_str += string(rune(arg[i]))
		}
	}
	return _str
}

=======================
// FILE: 50\union\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	if len(os.Args) == 3 {
		var res string
		s1 := os.Args[1]
		s2 := os.Args[2]

		for _, v := range s1 {
			if !strings.ContainsRune(res, v) {
				res += string(v)
			}
		}
		for _, v := range s2 {
			if !strings.ContainsRune(res, v) {
				res += string(v)
			}
		}
		fmt.Print(res)
	}
	fmt.Println()
}

=======================
// FILE: 50\wdmatch\main.go
=======================
package main

import (
	"fmt"
	"os"
)

func ok(s1 string, s2 string) bool {
	runes1 := []rune(s1)
	runes2 := []rune(s2)
	var rest string
	count := 0
	for i := 0; i < len(runes1); i++ {
		for j := count; j < len(runes2); j++ {
			if runes1[i] == runes2[j] {
				rest += string(runes1[i])
				j = len(runes2) - 1
			}
			count++
		}
	}
	return s1 == rest
}

func main() {
	if len(os.Args) == 3 {
		if ok(os.Args[1], os.Args[2]) {
			fmt.Println(os.Args[1])
		}
	}
}

=======================
// FILE: 65\fifthandskip.go
=======================
package solutions

import "strings"

func FifthAndSkip(str string) string {
	if str == "" {
		return "\n"
	}
	if len(str) < 5 {
		return "Invalid Input\n"
	}
	s := strings.ReplaceAll(str, " ", "")
	var _str strings.Builder
	j := 0
	for _, char := range s {
		if j == 5 {
			_str.WriteRune(rune(' '))
			j = 0
		} else {
			_str.WriteRune(rune(char))
			j++
		}
	}
	_str.WriteRune('\n')
	return _str.String()
}

=======================
// FILE: 65\notdecimal.go
=======================
package solutions

import (
	"math"
	"strconv"
)

func NotDecimal(dec string) string {
	j := -1
	n := 0
	if len(dec) == 0 {
		return "\n"
	}
	for i := 0; i < len(dec); i++ {
		if j == -1 && dec[i] == '.' {
			j++
		} else if j == 0 {
			n++
		}
	}
	s, err := strconv.ParseFloat(dec, 64)
	if err == nil {
		return strconv.Itoa(int(s*math.Pow(10, float64(n)))) + "\n"
	}
	return (dec + "\n")
}

=======================
// FILE: 65\revconcatalternate.go
=======================
package solutions

func RevConcatAlternate(slice1, slice2 []int) []int {
	len1 := len(slice1)
	len2 := len(slice2)
	maxLen := len1
	result := make([]int, 0, len1+len2)

	if len2 > maxLen {
		maxLen = len2
	}

	for i := maxLen; i >= 0; i-- {
		if i < len1 {
			result = append(result, slice1[i])
		}
		if i < len2 {
			result = append(result, slice2[i])
		}
	}

	return result
}

=======================
// FILE: 65\slice.go
=======================
package solutions

func ifNegative(a []string, n int) int {
	if n < 0 {
		n = len(a) + n
	}

	if n < 0 {
		n = 0
	} else if n > len(a) {
		n = len(a)
	}

	return n
}

func Slice(a []string, nbr ...int) []string {
	if len(nbr) == 0 {
		return a
	}

	first := nbr[0]
	if len(nbr) == 1 {
		if first < 0 {
			first = len(a) + first
			if first < 0 {
				return a
			}
		}
		return a[first:]
	}
	second := nbr[1]

	first = ifNegative(a, first)
	second = ifNegative(a, second)

	if first > second {
		return nil
	}

	return a[first:second]
}

=======================
// FILE: 75\findpairs\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func findPairs(arr []int, targetSum int) [][]int {
	var pairs [][]int
	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			if arr[i]+arr[j] == targetSum {
				pairs = append(pairs, []int{i, j})
			}
		}
	}
	return pairs
}

func isValidArrayFormat(s string) bool {
	s = strings.TrimSpace(s)
	if len(s) < 2 || s[0] != '[' || s[len(s)-1] != ']' {
		return false
	}
	return true
}

func main() {
	if len(os.Args) != 3 {
		fmt.Println("Invalid input.")
		return
	}

	arrayStr := os.Args[1]
	targetStr := os.Args[2]

	if !isValidArrayFormat(arrayStr) {
		fmt.Println("Invalid input.")
		return
	}

	arrayStr = strings.Trim(arrayStr, "[]")
	strNums := strings.Split(arrayStr, ",")
	var arr []int
	for _, strNum := range strNums {
		s := strings.TrimSpace(strNum)
		num, err := strconv.Atoi(s)
		if err != nil {
			fmt.Printf("Invalid number: %s\n", s)
			return
		}
		arr = append(arr, num)
	}

	targetSum, err := strconv.Atoi(targetStr)
	if err != nil {
		fmt.Println("Invalid target sum.")
		return
	}

	pairs := findPairs(arr, targetSum)
	if len(pairs) > 0 {
		fmt.Printf("Pairs with sum %d: %v\n", targetSum, pairs)
	} else {
		fmt.Println("No pairs found.")
	}
}

=======================
// FILE: 75\revwstr\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	if len(os.Args) == 2 {
		a := strings.Split(os.Args[1], " ")
		for i := len(a) - 1; i >= 0; i-- {
			fmt.Print(a[i])
			if i != 0 {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	}
}

=======================
// FILE: 75\rostring\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strings"
)

func deleteExtraSpaces(a []string) []string {
	var res []string
	for _, v := range a {
		if v != "" {
			res = append(res, v)
		}
	}
	return res
}

func main() {
	if len(os.Args) == 2 {
		words := strings.Split(os.Args[1], " ")
		words = deleteExtraSpaces(words)
		if len(words) >= 1 {
			for _, v := range words[1:] {
				fmt.Print(v, " ")
			}
			fmt.Print(words[0])
		}
	}
	fmt.Println()
}

=======================
// FILE: 75\wordflip.go
=======================
package solutions

import "strings"

func WordFlip(arg string) string {
	if arg == "" {
		return "Invalid Output\n"
	}
	var str []string = strings.Split(arg, " ")
	_len := len(str)
	var str1 string
	for i := _len - 1; i >= 0; i-- {
		if len(str[i]) != 0 {
			str1 += str[i]
		}
		if i > 0 && len(str[i-1]) != 0 {
			str1 += " "
		}
	}
	return (strings.TrimSpace(str1) + "\n")
}

=======================
// FILE: 85\itoabase.go
=======================
package solutions

import (
	"strconv"
	"strings"
)

func ItoaBase(value, base int) string {
	if base < 2 || base > 16 {
		return ""
	}

	return strings.ToUpper(strconv.FormatInt(int64(value), base))
}

=======================
// FILE: 85\options\main.go
=======================
package main

import (
	"fmt"
	"os"
	"unicode"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("options: abcdefghijklmnopqrstuvwxyz")
		return
	}

	var options [32]bool
	for _, v := range os.Args {
		if len(v) < 2 {
			fmt.Println("Invalid Option")
			return
		}
		if v[0] == '-' {
			if v[1] == 'h' {
				fmt.Println("options: abcdefghijklmnopqrstuvwxyz")
				return
			}
			// fill options
			for _, r := range v[1:] {
				if !unicode.Is(unicode.Latin, r) {
					fmt.Println("Invalid Option")
					return
				}
				options['z'-r+6] = true
			}
		}
	}
	for i, v := range options {
		if i%8 == 0 && i != 0 {
			fmt.Print(" ")
		}
		if v {
			fmt.Print(1)
		} else {
			fmt.Print(0)
		}
	}
	fmt.Println()
}

=======================
// FILE: 85\piglatin\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	if len(os.Args) != 2 || os.Args[1] == "" {
		return
	}
	s := os.Args[1]
	vowel := strings.IndexAny(s, "aeiouAEIOU")
	if vowel == -1 {
		fmt.Println("No vowels")
	} else {
		fmt.Println(string(s[vowel:]) + string(s[:vowel]) + "ay")
	}
}

=======================
// FILE: 85\romannumbers\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

type roman struct {
	num        int
	romanDigit string
}

func main() {
	if len(os.Args) == 2 {
		nbr, err := strconv.Atoi(os.Args[1])
		if err != nil || nbr >= 4000 || nbr == 0 {
			fmt.Println("ERROR: cannot convert to roman digit")
			return
		}
		patter := []roman{
			{num: 1000, romanDigit: "M"},
			{num: 900, romanDigit: "CM"},
			{num: 500, romanDigit: "D"},
			{num: 400, romanDigit: "CD"},
			{num: 100, romanDigit: "C"},
			{num: 90, romanDigit: "XC"},
			{num: 50, romanDigit: "L"},
			{num: 40, romanDigit: "XL"},
			{num: 10, romanDigit: "X"},
			{num: 9, romanDigit: "IX"},
			{num: 5, romanDigit: "V"},
			{num: 4, romanDigit: "IV"},
			{num: 1, romanDigit: "I"},
		}
		sumRoman, romandigit := print(nbr, patter)
		fmt.Println(strings.TrimSuffix(sumRoman, "+"))
		fmt.Println(romandigit)
	}
}

func print(nbr int, patter []roman) (string, string) {
	var sumRomanDigit, result string
	for _, v := range patter {
		for nbr >= v.num {
			sumRomanDigit += v.romanDigit + "+"
			result += v.romanDigit
			nbr -= v.num
		}
	}
	sumRomanDigit = formatsum(sumRomanDigit, patter)
	return sumRomanDigit, result
}

func formatsum(a string, patter []roman) string {
	result2 := strings.Split(a, "+")

	for i, v := range result2 {
		if len(v) == 2 {
			result2[i] = fmt.Sprintf("(%s-%s)", string(result2[i][1]), string(result2[i][0]))
		}
	}
	a = strings.Join(result2, "+")
	return a
}

=======================
// FILE: 95\brackets\main.go
=======================
package main

import (
	"fmt"
	"os"
)

func matchBrackets(exp string) bool {
	runes := []rune(exp)
	var opened []rune
	ptr := -1
	for _, c := range runes {
		if c == '(' || c == '[' || c == '{' {
			opened = append(opened, c)
			ptr++
		} else if c == ')' {
			if ptr < 0 || opened[ptr] != '(' {
				return false
			}
			opened = opened[:len(opened)-1]
			ptr--
		} else if c == ']' {
			if ptr < 0 || opened[ptr] != '[' {
				return false
			}
			opened = opened[:len(opened)-1]
			ptr--
		} else if c == '}' {
			if ptr < 0 || opened[ptr] != '{' {
				return false
			}
			opened = opened[:len(opened)-1]
			ptr--
		}
	}
	return len(opened) == 0
}

func main() {
	if len(os.Args) == 1 {
		fmt.Println()
	} else {
		for _, v := range os.Args[1:] {
			if matchBrackets(v) {
				fmt.Println("OK")
			} else {
				fmt.Println("Error")
			}
		}
	}
}

=======================
// FILE: 95\rpncalc\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func deleteExtraSpaces(a []string) (res []string) {
	for _, v := range a {
		if v != "" {
			res = append(res, v)
		}
	}
	return
}

func main() {
	if len(os.Args) != 2 {
		fmt.Println("Error")
		return
	}
	var values []int
	op := strings.Split(os.Args[1], " ")
	op = deleteExtraSpaces(op)
	for _, v := range op {
		val, err := strconv.Atoi(v)

		if err == nil {
			values = append(values, val)
			continue
		}

		n := len(values)
		if n < 2 {
			fmt.Println("Error")
			return
		}

		switch v {
		case "+":
			values[n-2] += values[n-1]
			values = values[:n-1]
		case "-":
			values[n-2] -= values[n-1]
			values = values[:n-1]
		case "*":
			values[n-2] *= values[n-1]
			values = values[:n-1]
		case "/":
			values[n-2] /= values[n-1]
			values = values[:n-1]
		case "%":
			values[n-2] %= values[n-1]
			values = values[:n-1]
		default:
			fmt.Println("Error")
			return
		}
	}
	if len(values) == 1 {
		fmt.Println(values[0])
	} else {
		fmt.Println("Error")
	}
}

=======================
// FILE: 999\brainfuck\main.go
=======================
package main

import (
	"fmt"
	"os"
)

const SIZE = 2048

func main() {
	if len(os.Args) != 2 {
		return
	}
	progpoint := []byte(os.Args[1])
	var arby [SIZE]byte
	pos := 0
	openBr := 0         // opened brackets
	i := 0              // iterates through the source code passed in the argument
	N := len(progpoint) // length of the source code
	for i >= 0 && i < N {
		switch progpoint[i] {
		case '>':
			// Increment the pointer
			pos++
		case '<':
			// decrement the pointes
			pos--
		case '+':
			// increment the pointed byte
			arby[pos]++
		case '-':
			// decrement the pointed byte
			arby[pos]--
		case '.':
			// print the pointed byte on std output
			fmt.Printf("%c", rune(arby[pos]))
		case '[':
			// go to the matching ']' if the pointed byte is 0 (while start)
			openBr = 0
			if arby[pos] == 0 {
				for i < N && (progpoint[i] != byte(']') || openBr > 1) {
					if progpoint[i] == byte('[') {
						openBr++
					} else if progpoint[i] == byte(']') {
						openBr--
					}
					i++
				}
			}
		case ']':
			// go to the matching '[' if the pointed byte is not 0 (while end)
			openBr = 0
			if arby[pos] != 0 {
				for i >= 0 && (progpoint[i] != byte('[') || openBr > 1) {
					if progpoint[i] == byte(']') {
						openBr++
					} else if progpoint[i] == byte('[') {
						openBr--
					}
					i--
				}
			}
		}
		i++
	}
}

=======================
// FILE: 999\grouping\main.go
=======================
package main

import (
	"fmt"
	"os"
	"strings"
	"unicode"
)

func singleSearch(exp []string, text string) []string {
	items := strings.Split(text, " ")
	var result []string

	for _, item := range items {
		for _, word := range exp {
			if strings.Contains(item, word) {
				result = append(result, item)
			}
		}
	}
	return result
}

func simpleSearch(runes []rune, text string) []string {
	exp := string(runes)

	var result []string
	if !strings.ContainsRune(exp, '|') {
		helper := []string{exp}
		result = append(singleSearch(helper, text))
	} else {
		expWords := strings.Split(exp, "|")
		result = append(result, singleSearch(expWords, text)...)
	}
	return result
}

func brackets(regexp, text string) {
	if text == "" || regexp == "" {
		return
	}
	runes := []rune(regexp)

	if runes[0] == '(' && runes[len(runes)-1] == ')' {
		runes = runes[1 : len(runes)-1]
		result := simpleSearch(runes, text)
		for i, s := range result {
			if !unicode.IsLetter(rune(s[len(s)-1])) {
				s = s[0 : len(s)-1]
			}
			fmt.Printf("%d: %s\n", i+1, s)
		}
	}
}

func main() {
	if len(os.Args) == 3 {
		brackets(os.Args[1], os.Args[2])
	}
}

