import React from 'react';

import { Button, Form } from 'antd';

import styles from './index.module.scss';

export default function Box() {
  return (
    <Form className={styles['filter-form']}>
      <Button type="primary" href={'https://ant.design/index-cn'}>
        Antd Docs
      </Button>
      &nbsp;
      <Button type="primary" href={'https://parceljs.org/'}>
        Parcel Docs
      </Button>
    </Form>
  );
}
