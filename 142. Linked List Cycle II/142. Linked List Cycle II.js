/*
 * Problem: 142. Linked List Cycle II
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/linked-list-cycle-ii/submissions/1912262621/
 * Language: javascript
 * Date: 2026-02-08
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let res = false;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow) {
            res = true;
            break
        }
    }
    if(!res) {
        return null;
    }
    
    let curr = head;
    while(curr != fast) {
        curr = curr.next;
        fast = fast.next;
        
    }
    return curr;
};
