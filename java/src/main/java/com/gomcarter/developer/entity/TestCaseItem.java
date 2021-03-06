package com.gomcarter.developer.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;

/**
 * @author gomcarter on 2020-01-10 14:40:23
 */
@Data
@Accessors(chain = true)
public class TestCaseItem {
    /**
     * 主键
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     * 排序值，值相等：则是并行接口；不相等的：小的先执行，大的后执行
     */
    private Integer sort;
    /**
     * 具体接口名称
     */
    private String name;
    /**
     * 接口hash值，可以是历史版本
     */
    private String hash;
    /**
     * 接口更新了，是否取最新接口
     */
    private Boolean autoRefresh;
    /**
     * 入参处理器，存储javascript脚本，对入参进行赋值，校验等等操作
     */
    private String paramHandler;
    /**
     * 结果处理器，存储javascript脚本，对当前接口返回数据进行校验、转换等等操作
     */
    private String resultHandler;
    /**
     * 接口用例外键
     */
    private Long fkTestCaseId;
    /**
     *
     */
    private Date createTime;
    /**
     *
     */
    private Date modifyTime;

    //@NotReplaceableStart
    // 重新生成代码时，NotReplaceableStart -> NotReplaceableEnd 中间的内容不会被覆盖


    //@NotReplaceableEnd
}
