// THEO ONLY
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ConfirmOrder() {

    const dispatch = useDispatch();

    // Load items from line_item table once this page is loaded
    useEffect(() => {
        fetchLineItems();
      }, []);

    const fetchLineItems = () => {
        axios.get('/')
    }

}