import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ACCOUNT } from '../utils/queries';
import { QUERY_ACCOUNTS } from '../utils/queries';
import { ADD_ACCOUNT } from '../utils/mutations';

const Account = () => {
    const accountList = useQuery(QUERY_ACCOUNT);

    const findAccount = useQuery(QUERY_ACCOUNTS);

    const [addAccount, { error }] = useMutation(ADD_ACCOUNT);

    const addNewAccount = async (newUsername) => {
        try{
            await addAccount({
                variables: {username: newUsername},
            });
        } catch(err) {
            console.error(err);
        }
    };

    return (accountList, findAccount, addNewAccount);
};

export default Account;