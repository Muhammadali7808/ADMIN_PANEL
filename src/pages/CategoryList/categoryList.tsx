import { Button, Image, message, Table, Space } from "antd";
import { useGetProducts } from "./service/query/useGetProducts";
import { Link } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { useDeleteItems } from "./service/mutation/useDeleteItems";

export const CategoryList = () => {
  const { data } = useGetProducts();
  const { mutate } = useDeleteItems();

  const deleteUser = (id: number) => {
    mutate(id, {
      onSuccess: () => {
        message.success("Successfully deleted!");
      },
      onError: () => {
        message.error("Failed to delete the category.");
      }
    });
  };

  const dataSource = data?.results?.map((item) => ({
    key: item.id,
    id: item.id,
    img: item.image,
    title: item.title,
  }));

  const columns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
      align: 'center',
    },
    {
      title: 'Image',
      dataIndex: 'img',
      key: 'img',
      render: (image) => <Image src={image} alt="category" width={80} height={70} />,
      width: '15%',
      align: 'center',
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      width: '35%',
      ellipsis: true, 
    },
    {
      title: 'Actions',
      dataIndex: 'change',
      key: 'change',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/app/edit/${record.id}`}>
            <Button type="primary" className="action-btn">
              Edit
            </Button>
          </Link>
          <Button
            onClick={() => deleteUser(record.id)}
            type="primary"
            danger
            className="action-btn"
          >
            Delete
          </Button>
        </Space>
      ),
      width: '40%',
      align: 'center', 
    }
  ];

  return (
    <div className="table-wrapper">
      <Space className="action-space">
        <Link to={'/app/create'}>
          <Button type="primary" size="large" className="create-btn" style={{
            marginBottom: '20px',
          }}>
            Create
          </Button>
        </Link>
      </Space>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        pagination={{ pageSize: 5 }}
        scroll={{ x: 'max-content' }}
        className="custom-table"
      />
    </div>
  );
};
