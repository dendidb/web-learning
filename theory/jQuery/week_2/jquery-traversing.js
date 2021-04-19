JQUERY TRAVERSING
--

jquery Traversing - Ancestors
--

selector.parent(); = parentnya satu tingkat di atas selector
selector.parent(selectorParent); = parent nya satu tingkat di atas
selector.parents(); = all parents di atas selector
selector.parentsUntil(selectorParent); = menyeleksi element di antara selector dan selectorParent


jquery Descendants
--

selector.chldren(); = element satu tingkat di bawah selector
selector.chldren(selectorChild); = element satu tingkat di bawah selector berdasarkan selectorChild
selector.find(selectorChild); = child satu tingkat di bawah atau lebuh dari selector

jQuery Traversing - Siblings
--

selector.siblings(); = semua element dan sesudah selector
selector.siblings(selectorSiblings) = semua element sebelum dan sesuadh selector

selector.next(); = 1 element setelah element selector
selector.next(selectorNext); = 1 element setelah element selector sesuai selectorNext
selector.nextAll(); = semua element setelah element selector
selector.nextAll(selectornextAll); = semua element setelah element selector sesuai selectornextAll
selector.nextUntil() = menyeleksi element di antara selector selector terakhir
selector.nextUntil(selectorNextUntil) = menyeleksi element di antara selector - selectorNextUntil

selector.prev() = 1 element sebelum element selector
selector.prev(selectorPrev) = 1 element sebelum element selector sesuai selectorPrev
selector.prevAll() = 1 esemua lement sebelum element selector
selector.prevAll(selectorPrevAll) = 1 element sebelum element selector sesuai selectorPrevALl
selector.prevUntil() = menyeleksi element-element di antara selector awal
selector.prevUntil(selectorPrevUntil) = 1 element sebelum element selector - selectorPrevUntilUntil



jQUery filtering
--
selector.first(); = element index 0 sesuai selector
selector.last(); = element terakhir sesuai selector
selector.eq(index); = get number index dari seluruh element windows
selector.filter(selectorFilter); = element sesuai selectorFilter
selector.not(selectorNot); = element yang bukan selectorNot
