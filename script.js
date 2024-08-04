
        function calculateTotal() {
            let subjects = 8;  // Number of subjects
            let grandTotal = 0; // Initialize grand total

            for (let i = 1; i <= subjects; i++) {
                // Get theory and practical marks for each subject
                let theory = parseFloat(document.getElementById(`theory${i}`).value) || 0;
                let practical = parseFloat(document.getElementById(`practical${i}`).value) || 0;
                
                // Calculate total marks for the subject
                let total = theory + practical;
                document.getElementById(`total${i}`).value = total; // Set total in the field
                document.getElementById(`totalWords${i}`).innerHTML =numberToWords(total);

                // Add to grand total
                grandTotal += total;
                document.getElementById("gtotwrd").innerHTML =numberToWords(grandTotal);
            }

            // Set grand total
            document.getElementById('gtot').value = grandTotal;

            // Calculate and set percentage
            let percentage = (grandTotal / (subjects * 100)) * 100;
            document.getElementById('percentage').innerHTML = percentage.toFixed(2) + "%";

            // Determine result
            let result = grandTotal >= subjects * 40 ? "PASS" : "FAIL";
            document.getElementById('result').innerHTML = result;

            // Determine grade based on percentage
            let grade = 'F';
            if (percentage >= 90) grade = 'A+';
            else if (percentage >= 80) grade = 'A';
            else if (percentage >= 70) grade = 'B+';
            else if (percentage >= 60) grade = 'B';
            else if (percentage >= 50) grade = 'C';
            document.getElementById('grade').innerHTML = grade;
        }
        // dateofresult
        date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;

        function numberToWords(num) {
            let words = [];
            while (num > 0) {
                let a = num % 10
                switch (a) {
                    case 1:
                        words.unshift("One");
                        break;
                    case 2:
                        words.unshift("Two");
                        break;
                    case 3:
                        words.unshift("Three");
                        break;
                    case 4:
                        words.unshift("Four");
                        break;
                    case 5:
                        words.unshift("Five");
                        break;
                    case 6:
                        words.unshift("Six");
                        break;
                    case 7:
                        words.unshift("Seven");
                        break;
                    case 8:
                        words.unshift("Eight");
                        break;
                    case 9:
                        words.unshift("Nine");
                        break;
                    default:
                        words.unshift("Zero");
                }
                num = parseInt(num / 10)
            }
            return words.join(" ");
        }
   
