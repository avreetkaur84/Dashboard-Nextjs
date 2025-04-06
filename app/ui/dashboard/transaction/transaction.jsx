import Image from "next/image";
import styles from "./transaction.module.css"

function Transaction() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>

                    <tr>

                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" height={40} width={40} className={styles.userImage} />
                                Malcolm Doe
                            </div>
                        </td>
                        <td>
                            {/* has three status and all status have different styling */}
                            <span className={` ${styles.status} ${styles.pending} `}>Pending</span>
                        </td>
                        <td>04.04.2025</td>
                        <td>$3.200</td>
                    </tr>

                    <tr>

                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" height={40} width={40} className={styles.userImage} />
                                Halt John
                            </div>
                        </td>
                        <td>
                            {/* has three status and all status have different styling */}
                            <span className={` ${styles.status} ${styles.done} `}>Done</span>
                        </td>
                        <td>24.02.2024</td>
                        <td>$3.800</td>
                    </tr>

                    <tr>

                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" height={40} width={40} className={styles.userImage} />
                                Wren
                            </div>
                        </td>
                        <td>
                            {/* has three status and all status have different styling */}
                            <span className={` ${styles.status} ${styles.pending} `}>Pending</span>
                        </td>
                        <td>14.01.2025</td>
                        <td>$4.200</td>
                    </tr>

                    <tr>

                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" height={40} width={40} className={styles.userImage} />
                                Micheal Clerk
                            </div>
                        </td>
                        <td>
                            {/* has three status and all status have different styling */}
                            <span className={` ${styles.status} ${styles.cancelled} `}>Cancelled</span>
                        </td>
                        <td>01.01.2025</td>
                        <td>$5.200</td>
                    </tr>

                    <tr>

                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" height={40} width={40} className={styles.userImage} />
                                Joe Root
                            </div>
                        </td>
                        <td>
                            {/* has three status and all status have different styling */}
                            <span className={` ${styles.status} ${styles.pending} `}>Pending</span>
                        </td>
                        <td>18.09.2024</td>
                        <td>$1.200</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Transaction;