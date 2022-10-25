/**
 * 时间轴组件
 * @author jianghong.wei
 * @since 2022-10-25 15:15:31
 */

interface DataItem {
  size: number;
  element: React.ReactElement;
}

interface IProps {
  data: DataItem[];
}

/** 内置尺寸 */
export enum SIZE {
  XS = 5,
  SM = 8,
  BASE = 12,
  LG = 15,
  XL = 18,
  XXL = 22,
}

export default function Timeline(props: IProps) {
  return (
    <div className="border-l-4 border-gray-300 pl-6 m-5 py-2">
      {props.data.map(({ element, size }) => {
        return (
          <div className="relative mb-6 last:mb-0">
            <i
              className="absolute border-gray-300 border-4 rounded-full bg-white box-content"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: '50%',
                transform: `translate(-50%, -50%)`,
                left: 'calc(-2px - 1.5rem)',
              }}></i>
            {element}
          </div>
        );
      })}
    </div>
  );
}
