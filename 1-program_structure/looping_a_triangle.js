/* Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
####### */

let string = '#';
while (string.length <= 7) {
    console.log(string);
    string += '#';
}